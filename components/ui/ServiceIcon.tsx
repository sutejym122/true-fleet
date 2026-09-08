import {
  BatteryCharging,
  BellRing,
  Fuel,
  Gift,
  IndianRupee,
  Landmark,
  LayoutGrid,
  LifeBuoy,
  Nfc,
  Scale,
  ShieldCheck,
  Store,
  Wrench,
  CircleDot,
  type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/data/services";

const icons: Record<IconKey, LucideIcon> = {
  fuel: Fuel,
  tyre: CircleDot,
  battery: BatteryCharging,
  parts: Wrench,
  insurance: ShieldCheck,
  assistance: LifeBuoy,
  fastag: Nfc,
  finance: Landmark,
  legal: Scale,
  marketplace: Store,
  payments: IndianRupee,
  fleet: LayoutGrid,
  reminders: BellRing,
  rewards: Gift,
};

export function ServiceIcon({
  name,
  className,
  strokeWidth = 1.5,
}: {
  name: IconKey;
  className?: string;
  strokeWidth?: number;
}) {
  const Icon = icons[name];
  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
