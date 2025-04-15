import CheckoutBootcamp from "@/components/HomePage/checkoutbootcamp";
import EmailAddress from "@/components/HomePage/emailaddress";
import Function from "@/components/HomePage/function";
import Hero from "@/components/HomePage/Hero";
import WhyChooseUS from "@/components/HomePage/whychooseus";


export default function Home() {
  return (
    <section className="">
      <Hero />
      <Function />
      <CheckoutBootcamp />
      <WhyChooseUS />
      <EmailAddress />
    </section>
  );
}
