"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSizeMediumTitles"
        background="fluid"
        cardStyle="glass-depth"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Why Us",          id: "#why-us"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="Super Boost Gym"
      button={{
        text: "Free Trial",        href: "https://wa.me/971564379911"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{
        variant: "gradient-bars"}}
      title="Transform Your Body at Super Boost Gym 💪"
      description="Train at one of Dubai’s top-rated gyms with expert coaches, modern equipment, and a results-driven environment."
      testimonials={[
        {
          name: "Elias Eid",          handle: "@elias",          testimonial: "Super Boost Gym is truly exceptional. The coaching is phenomenal.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-sporty-black-man-wearing-towel-around-neck_1262-16420.jpg"},
        {
          name: "Matthew",          handle: "@matthew",          testimonial: "Satisfying fitness experience and feels like a home.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-boxer-looking-camera_171337-20044.jpg"},
        {
          name: "Muhammad Ismail",          handle: "@muhammad",          testimonial: "One of the best gyms in Dubai with everything you need.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-helping-man-gym_23-2149740152.jpg"},
        {
          name: "Sarah Ahmed",          handle: "@sarah",          testimonial: "Incredible facilities and very motivating instructors.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-sporty-black-man-wearing-towel-around-neck_1262-16420.jpg"},
        {
          name: "David K",          handle: "@davidk",          testimonial: "Best value for money in Al Barsha by far.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-boxer-looking-camera_171337-20044.jpg"},
      ]}
      buttons={[
        {
          text: "Claim Your Free Trial",          href: "https://wa.me/971564379911"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/3d-render-grunge-interior-with-sunlight-shining-from-right-smokey-atmosphere_1048-12002.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/smiling-sporty-black-man-wearing-towel-around-neck_1262-16420.jpg",          alt: "User 1"},
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-boxer-looking-camera_171337-20044.jpg",          alt: "User 2"},
        {
          src: "http://img.b2bpic.net/free-photo/side-view-woman-helping-man-gym_23-2149740152.jpg",          alt: "User 3"},
        {
          src: "http://img.b2bpic.net/free-photo/smiling-sporty-black-man-wearing-towel-around-neck_1262-16420.jpg",          alt: "User 4"},
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-boxer-looking-camera_171337-20044.jpg",          alt: "User 5"},
      ]}
      marqueeItems={[
        {
          type: "text",          text: "24/7 Support"},
        {
          type: "text",          text: "Expert Coaching"},
        {
          type: "text",          text: "Modern Equipment"},
        {
          type: "text",          text: "Al Barsha Location"},
        {
          type: "text",          text: "Results Guaranteed"},
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Personal Training",          description: "1-on-1 coaching for specific goals.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/smiling-black-man-lifting-barbell-with-personal-trainer_1262-16411.jpg"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/smiling-black-man-lifting-barbell-with-personal-trainer_1262-16411.jpg"},
        },
        {
          title: "Strength & Conditioning",          description: "Build foundational power and speed.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/illustration-person-weight-lifting_23-2151850200.jpg"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/illustration-person-weight-lifting_23-2151850200.jpg"},
        },
        {
          title: "Boxing & Martial Arts",          description: "Intense combat sports training.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/fitness-girl-hitting-punching-bag_23-2148017340.jpg"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/fitness-girl-hitting-punching-bag_23-2148017340.jpg"},
        },
        {
          title: "Group Classes",          description: "High-energy group workouts.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/full-shot-people-training-together-gym_23-2150289996.jpg"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/full-shot-people-training-together-gym_23-2150289996.jpg"},
        },
        {
          title: "Sauna & Recovery",          description: "Optimize post-workout recovery.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/young-woman-having-rest-sauna-alone_1303-26472.jpg"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/young-woman-having-rest-sauna-alone_1303-26472.jpg"},
        },
      ]}
      showStepNumbers={false}
      title="Elite Fitness Services"
      description="Comprehensive training programs designed for results."
    />
  </div>

  <div id="why-us" data-section="why-us">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Why Choose Super Boost Gym?"
      description={[
        "4.6 Star Rated Gym in Dubai.",        "Professional MMA & fitness coaches.",        "Full range of modern machines and weights.",        "Prime location in Al Barsha, Dubai.",        "Friendly and motivating environment."]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="Super Boost Gym has completely changed my life. The coaches are phenomenal and the community is supportive and driven."
      rating={5}
      author="Elias Eid"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/smiling-sporty-black-man-wearing-towel-around-neck_1262-16420.jpg",          alt: "Elias"},
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-boxer-looking-camera_171337-20044.jpg",          alt: "Matthew"},
        {
          src: "http://img.b2bpic.net/free-photo/side-view-woman-helping-man-gym_23-2149740152.jpg",          alt: "Muhammad"},
        {
          src: "http://img.b2bpic.net/free-photo/smiling-sporty-black-man-wearing-towel-around-neck_1262-16420.jpg",          alt: "Sarah"},
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-boxer-looking-camera_171337-20044.jpg",          alt: "David"},
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "1",          name: "Free Weights",          price: "",          variant: "Equipment",          imageSrc: "http://img.b2bpic.net/free-photo/closeup-focus-shot-barbell-concept-exercise-weightlifting_181624-46342.jpg"},
        {
          id: "2",          name: "Cardio Suite",          price: "",          variant: "Cardio",          imageSrc: "http://img.b2bpic.net/free-photo/blurred-training-zone_1203-369.jpg"},
        {
          id: "3",          name: "Functional Area",          price: "",          variant: "Workout",          imageSrc: "http://img.b2bpic.net/free-photo/man-rubbing-hands-with-talcum_23-2147687729.jpg"},
        {
          id: "4",          name: "Rack System",          price: "",          variant: "Equipment",          imageSrc: "http://img.b2bpic.net/free-photo/folder-floor-fitness-tools_23-2148010504.jpg"},
        {
          id: "5",          name: "Stretching",          price: "",          variant: "Relaxation",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-attractive-young-woman-doing-yoga-pilates-exercise_1153-5512.jpg"},
        {
          id: "6",          name: "Reception",          price: "",          variant: "Lobby",          imageSrc: "http://img.b2bpic.net/free-photo/abstract-blur-gym-room_74190-5097.jpg"},
      ]}
      title="Our Facility"
      description="State-of-the-art equipment and training areas."
    />
  </div>

  <div id="urgency" data-section="urgency">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "Why limit membership?",          content: "To maintain a premium experience and avoid overcrowding."},
        {
          id: "2",          title: "Is the gym open daily?",          content: "Yes, we are open 6:00 AM – 12:00 AM daily."},
        {
          id: "3",          title: "Are coaches available?",          content: "Our elite trainers are on the floor throughout the day."},
      ]}
      title="Limited Spots Available"
      description="We only accept a limited number of new members each month to ensure the best training experience."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars"}}
      tag="Visit Us"
      title="Book Your Free Trial Now"
      description="Located in Al Barsha inside ibis Dubai Al Barsha, near Sheikh Zayed Road. Phone: +971 56 437 9911. Hours: 6:00 AM – 12:00 AM daily."
      buttonText="WhatsApp Trial"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Super Boost Gym"
      columns={[
        {
          title: "Quick Links",          items: [
            {
              label: "Services",              href: "#services"},
            {
              label: "Why Us",              href: "#why-us"},
            {
              label: "Trial",              href: "https://wa.me/971564379911"},
          ],
        },
        {
          title: "Location",          items: [
            {
              label: "Al Barsha, Dubai",              href: "#contact"},
            {
              label: "ibis Dubai Al Barsha",              href: "#contact"},
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
