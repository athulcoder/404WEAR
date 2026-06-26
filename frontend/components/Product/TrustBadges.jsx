import { Truck, ShieldCheck, BadgeCheck } from "lucide-react";

const TrustBadges = () => {
  return (
    <div
      className="
        w-full flex items-center  gap-1
        rounded-lg px-6 py-4
        bg-[#ebeff3]/50
        justify-between
        backdrop-blur-3xl

        border border-white/10
        mt-2
        mb-2
        
      "
    >
      <Badge
        icon={<Truck size={15}/>}
        text="Fast delivery"
      />

      <Divider />

      <Badge
        icon={<ShieldCheck  size={15}/>}
        text="Secure payments & COD"
      />

      <Divider />

      <Badge
        icon={<BadgeCheck  size={15}/>}
        text="Quality checked"
      />
    </div>
  );
};

const Badge = ({ icon, text }) => (
  <div className="flex items-center gap-2 text-[12px] text-gray-200">
    <span className="text-green-500">{icon}</span>
    <span className="font-light text-black">{text}</span>
  </div>
);

const Divider = () => (
  <div className="hidden sm:block h-5 w-px bg-white/10" />
);

export default TrustBadges;
