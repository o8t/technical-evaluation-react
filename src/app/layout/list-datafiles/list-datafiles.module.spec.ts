import { AddPatientModule } from './add-patient.module';

describe('AddPatienteModule', () => {
    let addPatientModule: AddPatientModule;

    beforeEach(() => {
        addPatientModule = new AddPatientModule();
    });

    it('should create an instance', () => {
        expect(addPatientModule).toBeTruthy();
    });
});
