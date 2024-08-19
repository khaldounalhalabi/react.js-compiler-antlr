export class RefHandler {
  public static refsStack: number[];

  public static add(id: number) {
    RefHandler.refsStack.push(id);
    return this;
  }

  public static pop() {
    RefHandler.refsStack.pop();
    return this;
  }

  public static isEmpty() {
    return RefHandler.refsStack.length == 0;
  }
}
