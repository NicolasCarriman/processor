interface IMediator {
    notify(sender: object, event: string ): void
}

class ConcreteMediator implements IMediator {
    
    private component1: ConcreteComponent;
    private component2: ConcreteComponent;

    constructor(c1: ConcreteComponent, c2: ConcreteComponent) {
        this.component1 = c1;
        this.component1.setMediator(this);
        this.component2 = c2;
        this.component2.setMediator(this);
    }

    notify(sender: object, event: string ) {
        
    }
}

class BaseComponent {
    protected mediator: ConcreteMediator;

    constructor(mediator?: ConcreteMediator) {
        this.mediator = mediator!;
    }

    public setMediator(mediator: ConcreteMediator) {
        this.mediator = mediator;
    }
}

class ConcreteComponent extends BaseComponent {
    
}