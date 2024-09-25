// app/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-secondary text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} مجموعة محمد. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
