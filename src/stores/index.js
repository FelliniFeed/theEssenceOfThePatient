import { createStore } from "vuex";
import { patientModule } from "./patientModule";

export default createStore({
    modules: {
        patient: patientModule,
    },
});
