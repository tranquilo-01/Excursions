export class UserAdmin {
  constructor(
    public uid: string,
    public dbkey: string,
    public email: string,
    public admin: boolean,
    public manager: boolean,
    public user: boolean,
    public banned: boolean,
    public persistence: string
  ) {}
}
