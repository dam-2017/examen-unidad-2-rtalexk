
export class UserService {
    private userName: string = '';

    public getUserName(): string {
        return this.userName;
    }

    public setUserName(userName: string) {
        this.userName = userName;
    }
}