import { Injectable } from "@angular/core";
import { config, EntityManager } from "breeze-client";

import "datajs";
import "breeze-client/breeze.ajax.angular";
import "breeze-client/breeze.dataService.odata";
import "breeze-client/breeze.modelLibrary.backingStore";
import "breeze-client/breeze.uriBuilder.odata";

@Injectable()
export class CustomEntityManager extends EntityManager {

    constructor() {
        super({
            serviceName: "/odata"
        });

        config.initializeAdapterInstance("uriBuilder", "odata");
        config.initializeAdapterInstance("dataService", "webApiOData", true);
    }
}
