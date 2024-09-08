export interface IToken {
  name: string;
  value: string;
}

class TokenProps implements IToken {
  constructor(
    public readonly name: string,
    public readonly value: string,
  ) {}
}

export class ReferenceToken implements IToken {
  private constructor(
    private readonly token: TokenProps,
  ) {}

  get name(): string {
    return this.token.name;
  }

  get value(): string {
    return this.token.value;
  }

  static create(name: string, value: string): ReferenceToken {
    return new ReferenceToken(new TokenProps(name, value));
  }
}

export class SystemToken implements IToken {
  private constructor(
    public readonly name: string,
    private readonly token: ReferenceToken,
  ) {}

  get value(): string {
    return this.token.value;
  }

  static create(name: string, token: ReferenceToken): SystemToken {
    return new SystemToken(name, token);
  }
}

export class ComponentToken implements IToken {
  private constructor(
    public readonly name: string,
    private readonly token: SystemToken,
  ) {}

  get value(): string {
    return this.token.value;
  }

  static create(name: string, token: SystemToken): ComponentToken {
    return new ComponentToken(name, token);
  }
}
