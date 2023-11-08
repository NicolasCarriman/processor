type circuitType = 'serie' | 'portrait' | undefined;
type caseType = 'silver' | 'gold' | 'plastic' | undefined;

export interface IComponent {
    usability: number;
    battery: number;
    circuit: circuitType;
    case: caseType;
}
