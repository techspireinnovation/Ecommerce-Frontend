"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function StoreSettingsCreate() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <Card className="rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="Store Name" placeholder="TechStore" />
          <FormField
            label="Support Email"
            placeholder="techstore@gmail.com"
            type="email"
          />
          <FormField label="Phone Number" placeholder="98XXXXXXXX" />
          
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Store Information
          </CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Street Address</Label>
              <Textarea placeholder="Thapagaun, New Baneshwor, 36 Santhosh Marga" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField label="State / Province" placeholder="3" />
              <FormField label="District" placeholder="Kathmandu" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField label="City" placeholder="Kathmandu" />
              <FormField label="Zip / Postal Code" placeholder="44600" />
            </div>

            <FormField
              label="Embed Map URL"
              placeholder="https://maps.app.goo.gl/..."
            />
          </div>

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

       <Card className="rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">
            Social Media Link
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="Instagram Link"
            placeholder="www.instagram.com/"
            
          />
          <FormField
            label="Facebook Link"
            placeholder="www.facebook.com/"
            
          />
          <FormField
            label="Whatsapp Link"
            placeholder="www.instagram.com/"
            
          />
          <FormField
            label="Linkedin Link"
            placeholder="www.linkedin.com/"
            
          />
         
          
        </CardContent>
      </Card>

      <div className="flex justify-end gap-3">
        <Button variant="outline">Cancel</Button>
        <Button>Save Store Settings</Button>
      </div>
    </div>
  );
}

function FormField({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Input type={type} placeholder={placeholder} />
    </div>
  );
}
