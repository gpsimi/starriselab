import CheckoutBootcamp from "@/components/checkoutbootcamp";
import EmailAddress from "@/components/emailaddress";
import Function from "@/components/function";
import Hero from "@/components/Hero";
import WhyChooseUS from "@/components/whychooseus";

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
