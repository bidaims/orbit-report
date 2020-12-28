export class Satellite {
name: string;
orbitType: string;
type: string;
operational: boolean;
launchDate: string;

constructor(name: string, type: string, operational: boolean, orbitType: string, launchDate: string){
    this.name = name;
    this.orbitType = orbitType;
    this.type = type;
    this.operational = operational;
    this.launchDate = launchDate;
}
shouldShowWarning(): boolean {
    if(this.type === "Space Debris"){
        return true;
    }
}
}
