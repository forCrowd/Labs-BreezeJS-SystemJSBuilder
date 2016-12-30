import { Component } from "@angular/core";

import { CustomEntityManager } from "./custom-entity-manager.service";

@Component({
    moduleId: module.id,
    selector: "app",
    templateUrl: "app.component.html"
})
export class AppComponent {

    metadata: Object = null;

    constructor(private entityManager: CustomEntityManager) {
    }

    fetchMetadata(): void {
        this.entityManager.fetchMetadata().then((metadata: any) => {
            this.metadata = metadata;
        });
    }
}
