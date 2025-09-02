
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, MapPin, Briefcase, Calendar, CreditCard, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface ServiceProviderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ServiceProviderModal: React.FC<ServiceProviderModalProps> = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    experience: '',
    services: '',
    description: '',
    subscriptionType: 'monthly'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const requiredFields = ['name', 'email', 'phone', 'address', 'city', 'state', 'services'];
    const missingFields = requiredFields.filter(field => !formData[field].trim());
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing Information",
        description: `Please fill in: ${missingFields.join(', ')}`,
        variant: "destructive"
      });
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return false;
    }

    // Phone validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast({
        title: "Invalid Phone",
        description: "Please enter a valid 10-digit Indian mobile number",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Prepare email content
      const emailSubject = `Service Provider Registration - ${formData.name}`;
      const emailBody = `
Service Provider Registration Details:

Personal Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

Location:
- Address: ${formData.address}
- City: ${formData.city}
- State: ${formData.state}

Professional Details:
- Experience: ${formData.experience} years
- Services Offered: ${formData.services}
- Description: ${formData.description}

Subscription:
- Type: ${formData.subscriptionType === 'monthly' ? 'Monthly (₹999/month)' : 'Yearly (₹9999/year - 2 months free!)'}

Registration Date: ${new Date().toLocaleDateString()}
      `.trim();

      // Create mailto link
      const mailtoLink = `mailto:imgtk17@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.location.href = mailtoLink;

      toast({
        title: "Registration Submitted! 🎉",
        description: "Your email client has opened. Please send the email to complete registration.",
        variant: "default"
      });

      // Reset form and close modal after a delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
          experience: '',
          services: '',
          description: '',
          subscriptionType: 'monthly'
        });
        onClose();
      }, 2000);

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to open email client. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-6 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Join Need2Fix Network! 🚀</h2>
                  <p className="text-blue-100 mt-1">Become a verified service provider</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="text-white hover:bg-white/20 rounded-full"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Registration Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-600" />
                    Registration Details
                  </CardTitle>
                  <CardDescription>
                    Fill in your information to join our network
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your@email.com"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Mobile Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="10-digit mobile number"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="experience">Experience (Years)</Label>
                      <Input
                        id="experience"
                        value={formData.experience}
                        onChange={(e) => handleInputChange('experience', e.target.value)}
                        placeholder="Years of experience"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Full Address *</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="Complete address with area, landmark"
                      className="mt-1 min-h-[80px]"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        placeholder="Your city"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        value={formData.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        placeholder="Your state"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="services">Services You Offer *</Label>
                    <Textarea
                      id="services"
                      value={formData.services}
                      onChange={(e) => handleInputChange('services', e.target.value)}
                      placeholder="List all services you provide (e.g., Plumbing, Electrical work, Carpentry)"
                      className="mt-1 min-h-[80px]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Additional Information</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Any additional details about your services or qualifications"
                      className="mt-1 min-h-[80px]"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Subscription Plans */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-green-600" />
                    Choose Your Plan
                  </CardTitle>
                  <CardDescription>
                    Select the subscription that works best for you
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div 
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        formData.subscriptionType === 'monthly' 
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20' 
                          : 'border-gray-200 dark:border-gray-700'
                      }`}
                      onClick={() => handleInputChange('subscriptionType', 'monthly')}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">Monthly Plan</h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">Perfect for getting started</p>
                          <div className="mt-2">
                            <span className="text-2xl font-bold text-blue-600">₹999</span>
                            <span className="text-gray-500">/month</span>
                          </div>
                        </div>
                        <Badge variant={formData.subscriptionType === 'monthly' ? 'default' : 'outline'}>
                          Popular
                        </Badge>
                      </div>
                      <ul className="mt-3 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        <li>✅ Unlimited service requests</li>
                        <li>✅ Direct customer contact</li>
                        <li>✅ Profile verification</li>
                        <li>✅ 24/7 support</li>
                      </ul>
                    </div>

                    <div 
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all relative overflow-hidden ${
                        formData.subscriptionType === 'yearly' 
                          ? 'border-green-500 bg-green-50 dark:bg-green-950/20' 
                          : 'border-gray-200 dark:border-gray-700'
                      }`}
                      onClick={() => handleInputChange('subscriptionType', 'yearly')}
                    >
                      <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                        SAVE ₹1998
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">Yearly Plan</h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">Best value - 2 months free!</p>
                          <div className="mt-2">
                            <span className="text-2xl font-bold text-green-600">₹9999</span>
                            <span className="text-gray-500">/year</span>
                            <div className="text-xs text-gray-500 line-through">₹11998</div>
                          </div>
                        </div>
                        <Badge variant={formData.subscriptionType === 'yearly' ? 'default' : 'outline'}>
                          Best Value
                        </Badge>
                      </div>
                      <ul className="mt-3 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        <li>✅ Everything in Monthly Plan</li>
                        <li>✅ Priority customer matching</li>
                        <li>✅ Advanced analytics</li>
                        <li>✅ Premium support</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-xl">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Why Choose Need2Fix?</h4>
                    <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
                      <li>🚀 Instant customer connections</li>
                      <li>📱 WhatsApp integration</li>
                      <li>⭐ Build your reputation</li>
                      <li>💰 Flexible pricing control</li>
                      <li>🛡️ Verified provider badge</li>
                      <li>📈 Grow your business</li>
                    </ul>
                  </div>

                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-semibold"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Submitting...' : 'Submit Registration via Email'}
                  </Button>

                  <p className="text-xs text-gray-500 text-center mt-2">
                    * Your email client will open to complete the registration
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceProviderModal;
