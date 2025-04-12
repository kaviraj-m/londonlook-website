import AdmissionProcess  from "../components/admission/AdmissionProcess";
import EligibilityCriteria  from "../components/admission/EligibilityCriteria";
import RequiredDocuments  from "../components/admission/RequiredDocuments";
import FAQSection  from "../components/admission/FAQSection";

const Admissions = () => {
  return (
    <div>
      <AdmissionProcess/>
      <EligibilityCriteria/>
      <RequiredDocuments/>
      <FAQSection/>
    </div>
  );
};

export default Admissions;
