export default function ProfileCard({ name, address, phone, pfp, bestFriend }) {
  return (
    <div
      className={`card flex flex-col border-1 border-[#EFEFEF] shadow-2xs p-px rounded-2xl gap-4 ${
        bestFriend ? "bg-green-100 border border-green-500" : "bg-white"
      }`}
    >
      <div className="profile flex gap-4 items-center border-b-1 border-[#D3D3D3] pb-3">
        <img src={pfp} alt={name} className="w-16 rounded-full" />
        <p className="text-2xl font-medium">{name}</p>
        {bestFriend && (
          <span className="bg-green-700 text-white flex w-25 justify-center rounded-full">
            Best Friend
          </span>
        )}
      </div>

      <div className="flex gap-12">
        <div className="flex items-center gap-3 max-w-3xs w-full">
          <img src="/icons/ic-home.svg" className="icon w-5 h-5" />
          <p>{address}</p>
        </div>

        <div className="flex gap-3">
          <img src="/icons/ic-whatsapp.svg" className="icon w-5 h-5" />
          <a href={`https://wa.me/${phone}`} target="_blank" className="text-[#007AFF]">
            {phone}
          </a>
        </div>
      </div>
    </div>
  );
}
