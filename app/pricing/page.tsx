"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface Plan {
  id: number;
  name: string;
  price: string;
  features: number;
  users: string;
  support: string;
}

const initialPlans: Plan[] = [
  { id: 1, name: "Free", price: "$0", features: 5, users: "1 user", support: "Community" },
  { id: 2, name: "Pro", price: "$29", features: 20, users: "5 users", support: "Email" },
  { id: 3, name: "Team", price: "$99", features: 50, users: "25 users", support: "Priority" },
  { id: 4, name: "Enterprise", price: "Custom", features: 999, users: "Unlimited", support: "24/7" },
];

export default function PricingPage() {
  const [plans, setPlans] = useState<Plan[]>(initialPlans);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState<Plan | null>(null);
  const [formData, setFormData] = useState({ name: "", price: "", features: 0, users: "", support: "" });

  const handleAdd = () => {
    setEditingPlan(null);
    setFormData({ name: "", price: "", features: 0, users: "", support: "" });
    setIsDialogOpen(true);
  };

  const handleEdit = (plan: Plan) => {
    setEditingPlan(plan);
    setFormData(plan);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setPlans(plans.filter(p => p.id !== id));
  };

  const handleSave = () => {
    if (editingPlan) {
      setPlans(plans.map(p => p.id === editingPlan.id ? { ...formData, id: editingPlan.id } : p));
    } else {
      setPlans([...plans, { ...formData, id: Date.now() }]);
    }
    setIsDialogOpen(false);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Pricing Plans
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose the perfect plan for your needs. All plans include our core features.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex justify-end mb-4">
              <Button
                onClick={handleAdd}
                className="bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold hover:shadow-lg hover:shadow-green-500/50"
              >
                Add New Plan
              </Button>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg overflow-hidden">
              <Table>
                <TableCaption className="text-gray-400">Manage your pricing plans</TableCaption>
                <TableHeader>
                  <TableRow className="border-green-500/20 hover:bg-green-500/5">
                    <TableHead className="text-green-400">Plan Name</TableHead>
                    <TableHead className="text-green-400">Price</TableHead>
                    <TableHead className="text-green-400">Features</TableHead>
                    <TableHead className="text-green-400">Users</TableHead>
                    <TableHead className="text-green-400">Support</TableHead>
                    <TableHead className="text-green-400 text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {plans.map((plan) => (
                    <TableRow key={plan.id} className="border-green-500/20 hover:bg-green-500/5">
                      <TableCell className="font-medium text-white">{plan.name}</TableCell>
                      <TableCell className="text-green-400 font-bold">{plan.price}/mo</TableCell>
                      <TableCell className="text-gray-300">{plan.features} features</TableCell>
                      <TableCell className="text-gray-300">{plan.users}</TableCell>
                      <TableCell className="text-gray-300">{plan.support}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-green-400">
                              ⋮
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="bg-black border-green-500/20">
                            <DropdownMenuItem
                              onClick={() => handleEdit(plan)}
                              className="text-gray-300 hover:text-green-400 hover:bg-green-500/10 cursor-pointer"
                            >
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => handleDelete(plan.id)}
                              className="text-red-400 hover:text-red-300 hover:bg-red-500/10 cursor-pointer"
                            >
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* CRUD Dialog */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="bg-black border-green-500/20">
              <DialogHeader>
                <DialogTitle className="text-green-400">
                  {editingPlan ? "Edit Plan" : "Add New Plan"}
                </DialogTitle>
                <DialogDescription className="text-gray-400">
                  {editingPlan ? "Update the plan details below." : "Create a new pricing plan."}
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <label className="text-sm text-gray-300">Plan Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-green-500/10 border border-green-500/20 rounded px-3 py-2 text-white focus:border-green-400 focus:outline-none"
                    placeholder="e.g., Pro"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm text-gray-300">Price</label>
                  <input
                    type="text"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="bg-green-500/10 border border-green-500/20 rounded px-3 py-2 text-white focus:border-green-400 focus:outline-none"
                    placeholder="e.g., $29"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm text-gray-300">Features Count</label>
                  <input
                    type="number"
                    value={formData.features}
                    onChange={(e) => setFormData({ ...formData, features: parseInt(e.target.value) })}
                    className="bg-green-500/10 border border-green-500/20 rounded px-3 py-2 text-white focus:border-green-400 focus:outline-none"
                    placeholder="e.g., 20"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm text-gray-300">Users</label>
                  <input
                    type="text"
                    value={formData.users}
                    onChange={(e) => setFormData({ ...formData, users: e.target.value })}
                    className="bg-green-500/10 border border-green-500/20 rounded px-3 py-2 text-white focus:border-green-400 focus:outline-none"
                    placeholder="e.g., 5 users"
                  />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm text-gray-300">Support</label>
                  <input
                    type="text"
                    value={formData.support}
                    onChange={(e) => setFormData({ ...formData, support: e.target.value })}
                    className="bg-green-500/10 border border-green-500/20 rounded px-3 py-2 text-white focus:border-green-400 focus:outline-none"
                    placeholder="e.g., Email"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="ghost"
                  onClick={() => setIsDialogOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleSave}
                  className="bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold"
                >
                  {editingPlan ? "Update" : "Create"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
