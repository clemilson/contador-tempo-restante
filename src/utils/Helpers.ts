export class Helpers {

   static async setItemSessionStorage (targetDate: string): Promise<void> {
    await sessionStorage.setItem('targetDate', targetDate);
   }
   
   static async getItemSessionStorage (): Promise<string | null> {
    return sessionStorage.getItem('targetDate');
   }  

   static async removeItemSessionStorage (): Promise<void> {
    return sessionStorage.removeItem('targetDate');
   }

   static convertValueToTwoDigits(value: number): String {
      if(value < 10) {
         return "0" + value
      }
      return value.toString()
   }
}