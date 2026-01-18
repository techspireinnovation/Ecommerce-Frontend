"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import ReusableField from "@/reusable/form/field/ReusableField";
import { Plus } from "lucide-react";
import { useState } from "react";

const Page = () => {
  const [hightlights, setHighlights] = useState([
    { title: "", description: "" },
    { title: "", description: "" },
    { title: "", description: "" },
    { title: "", description: "" },
  ]);
  return (
    <div>
      <h4>Product</h4>
      <p className="mb-4">Create a new product</p>
      <div className="grid grid-cols-3 gap-4">
        <div className=" col-span-2">
          <Card className="px-3 py-2">
            <h5>Basic Information</h5>
            <ReusableField label="Product Name">
              <Input />
            </ReusableField>
            <div className="grid grid-cols-2 gap-4">
              <ReusableField label="Brands">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </ReusableField>
              <ReusableField label="Category">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </ReusableField>
            </div>
            <ReusableField label="Product Summary">
              <Textarea placeholder="Write a detailed product summary...." />
            </ReusableField>
            <ReusableField label="Overview">
              <Textarea placeholder="Write a detailed product overview...." />
            </ReusableField>
            <div>
              <div className="flex items-center justify-between">
                <h6>Hightlights</h6>
                <Button variant="outline">
                  {" "}
                  <Plus /> Add Highlight{" "}
                </Button>
              </div>
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                {hightlights.map(({ title, description }, index) => (
                  <AccordionItem key={title} value={title || `value ${index}`}>
                    <AccordionTrigger>
                      {title || `Highlights ${index + 1}`}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      <Input placeholder="Title" />
                      <Textarea placeholder="Description" />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Card>
          <Card className="px-3 py-2 mt-3">
            <h5>Pricing</h5>
            <div className="grid grid-cols-2 gap-4">
              <ReusableField label="Price(Rs.)">
                <Input type="number" placeholder=" 0.00" />
              </ReusableField>
              <ReusableField label="Discount(%)">
                <Input type="number" placeholder=" 0.00" />
              </ReusableField>
            </div>
          </Card>
          <Card className="px-3 py-2 mt-3">
            <div>
              <div className="flex items-center justify-between">
                <h6>Specifications</h6>
                <Button variant="outline">
                  {" "}
                  <Plus /> Add Section{" "}
                </Button>
              </div>
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                {hightlights.map(({ title, description }, index) => (
                  <AccordionItem key={title} value={title || `value ${index}`}>
                    <AccordionTrigger>
                      {title || `Specification ${index + 1}`}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      <ReusableField label="Section Name">
                        <Input placeholder="Display" />
                      </ReusableField>
                      <Card className="px-2 py-3">
                        <div className="flex items-center justify-between">
                          <h6></h6>
                          <Button variant="outline">
                            {" "}
                            <Plus /> Add Option
                          </Button>
                        </div>
                        <Accordion
                          type="single"
                          collapsible
                          className="w-full"
                          defaultValue="item-1"
                        >
                          {hightlights.map(({ title, description }, index) => (
                            <AccordionItem
                              key={title}
                              value={title || `value ${index}`}
                            >
                              <AccordionTrigger>Key & Value</AccordionTrigger>
                              <AccordionContent className="flex flex-col gap-4 text-balance">
                                <div className="grid grid-cols-2 gap-4">
                                    <ReusableField label="Key">
                                  <Input placeholder="" />
                                </ReusableField>
                                <ReusableField label="Value">
                                  <Input placeholder="0" />
                                </ReusableField>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </Card>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Card>
        </div>
        <Card></Card>
      </div>
    </div>
  );
};

export default Page;
