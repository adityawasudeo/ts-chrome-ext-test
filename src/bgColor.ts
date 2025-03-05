export default class BgColor {
    public constructor() {}
    public getColor(state:boolean): string {
        if(state) { return 'yellow' }
        return 'white'
    }
}
