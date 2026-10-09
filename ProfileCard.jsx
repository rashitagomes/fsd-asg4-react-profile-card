function ProfileCard({ name, imageUrl, description }) {
  return (
    <section className="card">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </section>
  );
}

export default ProfileCard;
