import { LightningElement, track, wire } from 'lwc';
import getPropertyDetails from '@salesforce/apex/propertyController.getPropertyDetails';

export default class FilterComponent extends LightningElement {

    @track locations = []; 

    @wire(getPropertyDetails)
    wiredPropertyDetails({ error, data }) {
        if (data) {
            console.log("Data : ", data);
            this.locations = data.map(property => ({
                label : property.Location__c,
                value: property.Location__c
            }))
            console.log("Locations : ", this.locations.Location__c);
        } else if (error) {
            console.error('Error fetching property details:', error);
        }
    }
    get locationOption(){
        return this.locations;
    }
}
