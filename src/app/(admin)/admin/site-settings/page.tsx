"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Edit } from "lucide-react";

export default function Page() {
  return (
    <div className=" max-w-7xl mx-auto">
      <h5>Site Settings</h5>
      <p>Manage your Store's contact info & Physical Location</p>
      <Card className="rounded-2xl shadow-sm mt-4">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl font-semibold">
            Contact Information
          </CardTitle>
          <Button variant="secondary" className="gap-2">
            <Edit size={16} /> Edit
          </Button>
        </CardHeader>

        <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left info */}
          <div className="space-y-4 text-sm">
            <InfoRow label="Store Name" value="TechStore" />
            <InfoRow
              label="Phone Number"
              value="9870116578"
              icon={<Phone size={14} />}
            />
            <InfoRow
              label="Support Email"
              value="techstore@gmail.com"
              icon={<Mail size={14} />}
            />
            <InfoRow
              label="Logo"
              value={
                <span className="text-blue-600 font-medium">TechStore</span>
              }
            />
            <InfoRow
              label="Fav icon"
              value={<span className="font-medium">Techstore</span>}
            />

            <Separator className="my-4" />

            <h3 className="font-medium text-base">Store Information</h3>
            <InfoRow
              label="Street Address"
              value="Thapagaun new baneshwor, 36 Santhosh Marga"
            />
            <InfoRow label="City" value="Kathmandu" />
            <InfoRow label="State / Province" value="3" />
            <InfoRow label="Zip / Postal Code" value="44600" />
            <InfoRow label="District" value="Kathmandu" />
            <InfoRow
              label="Embed Map"
              value={
                <a href="#" className="text-blue-600 hover:underline break-all">
                  https://maps.app.goo.gl/Mz998cg4kuodUr2FA
                </a>
              }
            />
          </div>

          {/* Map */}
          <div className="w-full h-[420px] rounded-xl overflow-hidden border">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Kathmandu&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="mt-6 rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Social Media</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SocialCard
            platform="Instagram"
            url="https://www.instagram.com/username_demo"
          />
          <SocialCard
            platform="Facebook"
            url="https://www.facebook.com/username.demo"
          />
          <SocialCard
            platform="WhatsApp"
            url="https://chat.whatsapp.com/demo"
          />
          <SocialCard
            platform="LinkedIn"
            url="https://www.linkedin.com/in/username_demo"
          />
        </CardContent>
      </Card>
    </div>
  );
}

function InfoRow({ label, value, icon }: any) {
  return (
    <div className="grid grid-cols-[160px_1fr] gap-4 items-start">
      <span className="text-muted-foreground">{label}</span>
      <span className="flex items-center gap-2">
        {icon}
        {value}
      </span>
    </div>
  );
}

function SocialCard({ platform, url }: { platform: string; url: string }) {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-xl">
      <Badge variant="secondary" className="w-24 justify-center">
        {platform}
      </Badge>
      <a href={url} className="text-sm text-blue-600 hover:underline break-all">
        {url}
      </a>
    </div>
  );
}
