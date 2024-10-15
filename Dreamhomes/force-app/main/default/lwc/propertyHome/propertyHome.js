import { LightningElement, wire } from 'lwc';

import getPropertyDetails from '@salesforce/apex/propertyController.getPropertyDetails';

export default class PropertyHome extends LightningElement {
    filteredProperties = [];
    errors;
    @wire(getPropertyDetails)
    propertyDetails({data, error}){
        if(data){
            this.filteredProperties = data;
        }
        else{
            this.errors = error;
        }
    }
}