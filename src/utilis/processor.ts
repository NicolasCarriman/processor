import { IComponent } from "../models/component.model";
import { INotify } from "../models/notify.model";

interface IProcessor {

}

const buildComponent = (duration: number, result: any) => {

    const component: IComponent = {
        usability: 0,
        battery: 0,
        circuit: undefined,
        case: undefined
    };

    return (
        setTimeout(() => {component['circuit'] = 'portrait';}, duration / 4),
        setTimeout(() => {component['battery'] =  100}, duration / 3),
        setTimeout(() => {component['case'] =  'gold'}, duration / 2),
        setTimeout(() => {component['usability'] =  5; result=component}, duration / 1)
    );
}

class Processor implements IProcessor {

    private notification;
    public response: any = 0;

    constructor(notification: INotify) {
        this.notification = notification;
    }

    getProcessType(process: INotify['process']): void {
        if(process.type === 'build') {
            setInterval(() => {this.response = this.response + 1}, 1000);
            buildComponent(process.duration, this.response);
        }
    }
}