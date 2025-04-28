export default function ProfileCard({ name, address, phone, pfp }) {
  return (
    <div className="card">
      <div className="profile">
        <img src={pfp} alt="" />
        <p>{name}</p>
      </div>
      <div className="desc">
        <div className="almt">
          <img src="/icons/ic-home.svg" className="icon" />
          <p>{address}</p>
        </div>

        <div className="wa">
          <img src="/icons/ic-whatsapp.svg" className="icon" />
          <a href={`https://wa.me/${phone}`}>{phone}</a>
        </div>
      </div>
    </div>
  );
}
