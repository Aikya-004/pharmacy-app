import { toastController } from '@ionic/core';

export async function toast(message: string, duration: number = 2000) {
    const toast = await toastController.create({
        message,
        duration,
        position: 'top',
    });
    toast.present();
}
