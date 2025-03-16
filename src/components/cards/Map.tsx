const Map = () => {
  return (
    <div className="col-span-2">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5589.08828562479!2d69.22071163225469!3d41.28146408133471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2s!4v1742038096572!5m2!1sru!2s"
        width='100%'
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
