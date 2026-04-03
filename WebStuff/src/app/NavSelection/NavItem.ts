export class NavItem {
    Title: string;
    Path: string;
    constructor(public title: string, public path: string) {
        this.Title = title;
        this.Path = path;
    }
}