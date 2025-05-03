import SchoolAddressMap from "../components/contact/SchoolAddressMap";
import SocialMediaLinks from "../components/contact/SocialMediaLinks";
import OfficeHours from "../components/contact/OfficeHours";
import InquiryForm from "../components/contact/InquiryForm";
import ContactInformation from "../components/contact/ContactInformation";
const ContactPage = () => {
  return (
    <div>
      <SchoolAddressMap />
      <ContactInformation />
      <OfficeHours />
      <InquiryForm />
    </div>
  );
};

export default ContactPage;
