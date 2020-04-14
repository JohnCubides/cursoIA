import { ChatComponent } from './../components/chat/chat.component';
import { ChatsService, chat } from './../services/chats.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public chatRooms: any = [];
  constructor(
    private authSvc: AuthService,
    private chatService: ChatsService,
    private modal: ModalController,
    public actionSheetController: ActionSheetController
  ) { }


  onLogout() {
    this.authSvc.logout();
  }

  ngOnInit() {
    this.chatService.getChatRooms().subscribe(chats => {
      this.chatRooms = chats;
    });
  }

  openChat(chat) {
    this.modal.create({
      component: ChatComponent,
      componentProps: {
        chat: chat
      }
    }).then((modal) => modal.present())
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Desconectarse',
        role: 'destructive',
        icon: 'log-out',
        handler: () => {
          this.onLogout();
        }
      }]
    });
    await actionSheet.present();
  }
}
