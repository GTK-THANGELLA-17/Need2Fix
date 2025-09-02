
import React from 'react';
import { MessageCircle, Phone, AlertCircle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FormSubmissionProps {
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

export const FormSubmission: React.FC<FormSubmissionProps> = ({
  isLoading,
  onSubmit
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* WhatsApp Process Info */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <MessageCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
          <h4 className="font-medium text-green-800 dark:text-green-200">Next Step: Contact Providers</h4>
        </div>
        <p className="text-sm text-green-600 dark:text-green-300">
          We'll show you available providers in your area. Click any provider's WhatsApp button to send a pre-filled message with all your details above.
        </p>
      </div>

      {/* Submit Buttons */}
      <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-11 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
        >
          {isLoading ? (
            <>
              <AlertCircle className="w-4 h-4 mr-2 animate-spin" />
              Finding Providers...
            </>
          ) : (
            <>
              <Users className="w-4 h-4 mr-2" />
              Find Service Providers
            </>
          )}
        </Button>
        
        <div className="text-center">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
              Need immediate assistance?
            </p>
            <a
              href="tel:+918499090369"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm"
            >
              <Phone size={14} />
              Call +91 8499090369 directly
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};
