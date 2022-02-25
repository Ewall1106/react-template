import { makeAutoObservable } from "mobx";

class User {
  constructor() {
    makeAutoObservable(this);
  }
}

export const UserObserver = new User();

export default UserObserver;
