
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Github, Chrome } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      // Mock registration
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Account created successfully!",
        description: "Welcome to BlogNode. You can now start writing.",
      });
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Registration failed",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    toast({
      title: `${provider} login`,
      description: `Redirecting to ${provider} authentication...`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-brand-bg flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo */}
        <div className="text-center">
          <Link to="/" className="inline-flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-brand-blue dark:to-brand-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-gray-900 dark:text-brand-text font-bold text-2xl">BlogNode</span>
          </Link>
        </div>

        <Card className="bg-white dark:bg-brand-bg2 border-gray-200 dark:border-zinc-700 shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center text-gray-900 dark:text-brand-text">
              Create your account
            </CardTitle>
            <CardDescription className="text-center text-gray-600 dark:text-brand-text2">
              Join thousands of developers sharing their knowledge
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Social Login Buttons */}
            <div className="space-y-3">
              <Button
                type="button"
                variant="outline"
                className="w-full bg-white dark:bg-brand-bg3 border-gray-300 dark:border-zinc-600 text-gray-900 dark:text-brand-text hover:bg-gray-50 dark:hover:bg-brand-bg4 transition-colors"
                onClick={() => handleSocialLogin('Google')}
              >
                <Chrome className="w-5 h-5 mr-3" />
                Continue with Google
              </Button>
              
              <div className="flex space-x-3">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 bg-white dark:bg-brand-bg3 border-gray-300 dark:border-zinc-600 text-gray-900 dark:text-brand-text hover:bg-gray-50 dark:hover:bg-brand-bg4 transition-colors"
                  onClick={() => handleSocialLogin('GitHub')}
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 bg-white dark:bg-brand-bg3 border-gray-300 dark:border-zinc-600 text-gray-900 dark:text-brand-text hover:bg-gray-50 dark:hover:bg-brand-bg4 transition-colors"
                  onClick={() => handleSocialLogin('LinkedIn')}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300 dark:border-zinc-600" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white dark:bg-brand-bg2 px-2 text-gray-500 dark:text-brand-text3">
                  Or continue with email
                </span>
              </div>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="fullName" className="text-gray-900 dark:text-brand-text">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="mt-1 bg-white dark:bg-brand-bg3 border-gray-300 dark:border-zinc-600 text-gray-900 dark:text-brand-text placeholder-gray-500 dark:placeholder-brand-text3 focus:border-blue-500 dark:focus:border-brand-blue focus:ring-blue-500 dark:focus:ring-brand-blue"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-900 dark:text-brand-text">Email address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 bg-white dark:bg-brand-bg3 border-gray-300 dark:border-zinc-600 text-gray-900 dark:text-brand-text placeholder-gray-500 dark:placeholder-brand-text3 focus:border-blue-500 dark:focus:border-brand-blue focus:ring-blue-500 dark:focus:ring-brand-blue"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-gray-900 dark:text-brand-text">Password</Label>
                <div className="mt-1 relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="bg-white dark:bg-brand-bg3 border-gray-300 dark:border-zinc-600 text-gray-900 dark:text-brand-text placeholder-gray-500 dark:placeholder-brand-text3 focus:border-blue-500 dark:focus:border-brand-blue focus:ring-blue-500 dark:focus:ring-brand-blue pr-10"
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400 dark:text-brand-text3" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400 dark:text-brand-text3" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-gray-900 dark:text-brand-text">Confirm Password</Label>
                <div className="mt-1 relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="bg-white dark:bg-brand-bg3 border-gray-300 dark:border-zinc-600 text-gray-900 dark:text-brand-text placeholder-gray-500 dark:placeholder-brand-text3 focus:border-blue-500 dark:focus:border-brand-blue focus:ring-blue-500 dark:focus:ring-brand-blue pr-10"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400 dark:text-brand-text3" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400 dark:text-brand-text3" />
                    )}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-brand-blue dark:hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                disabled={isLoading}
              >
                {isLoading ? 'Creating account...' : 'Create account'}
              </Button>
            </form>

            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-brand-text2">
                Already have an account?{' '}
                <Link 
                  to="/signin" 
                  className="text-blue-600 dark:text-brand-blue hover:text-blue-500 dark:hover:text-blue-400 font-medium transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </div>

            <div className="text-center">
              <p className="text-xs text-gray-500 dark:text-brand-text3">
                By creating an account, you agree to our{' '}
                <Link to="#" className="text-blue-600 dark:text-brand-blue hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="#" className="text-blue-600 dark:text-brand-blue hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
