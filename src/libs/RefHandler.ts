export class RefHandler {
  public static refsStack: { key: string; value: number }[] = [];

  public static add(ref: { key: string; value: number }) {
    RefHandler.refsStack.push(ref);
    return this;
  }

  public static pop(key: string) {
    return (
      RefHandler.refsStack.filter((ref) => ref.key == key)?.[0] ?? undefined
    );
  }

  public static isEmpty() {
    return RefHandler.refsStack.length == 0;
  }
}
