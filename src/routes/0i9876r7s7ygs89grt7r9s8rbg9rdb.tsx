import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { useConvexAuth, useQuery } from 'convex/react';
import AdminPanel from '@/components/admin/AdminPanel';
import { useAuthActions } from "@convex-dev/auth/react";
import { api } from '../../convex/_generated/api';

export const Route = createFileRoute('/0i9876r7s7ygs89grt7r9s8rbg9rdb')({
  head: () => ({
    meta: [
      { name: "robots", content: "noindex, nofollow" },
      { title: "Admin" },
    ],
  }),
  component: HiddenAdminRoute,
})

function HiddenAdminRoute() {
  const [securityKey, setSecurityKey] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const { isAuthenticated, isLoading } = useConvexAuth();

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (securityKey === '31209') {
      setIsUnlocked(true);
    } else {
      alert('Invalid security key');
    }
  };

  if (isLoading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  if (!isUnlocked && !isAuthenticated) {
    return (
      <div className="flex h-screen items-center justify-center bg-canvas">
        <form onSubmit={handleUnlock} className="flex flex-col gap-4 p-8 bg-surface rounded-lg shadow-md border border-ink/10">
          <h2 className="text-xl font-medium text-ink">Admin Access</h2>
          <input
            type="password"
            value={securityKey}
            onChange={(e) => setSecurityKey(e.target.value)}
            className="px-4 py-2 bg-canvas border border-ink/20 rounded focus:outline-none focus:border-ink text-ink"
            placeholder="Security Key"
          />
          <button type="submit" className="px-4 py-2 bg-ink text-canvas rounded hover:bg-ink/90 transition-colors">
            Unlock
          </button>
        </form>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AuthForm />;
  }

  return <AdminPanel />;
}

function AuthForm() {
  const { signIn } = useAuthActions();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const hasAdmin = useQuery(api.users.hasAdmin);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const flow = hasAdmin ? "signIn" : "signUp";
    void signIn("password", { email, password, flow }).catch((error) => {
      console.error(error);
      alert('Authentication failed: ' + error.message);
    });
  };

  if (hasAdmin === undefined) {
    return <div className="flex h-screen items-center justify-center">Checking status...</div>;
  }

  return (
    <div className="flex h-screen items-center justify-center bg-canvas">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 bg-surface rounded-lg shadow-md border border-ink/10 w-full max-w-sm">
        <h2 className="text-xl font-medium text-ink">{!hasAdmin ? 'Create Admin Account' : 'Admin Login'}</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 bg-canvas border border-ink/20 rounded focus:outline-none focus:border-ink text-ink"
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-2 bg-canvas border border-ink/20 rounded focus:outline-none focus:border-ink text-ink"
          placeholder="Password"
          required
        />
        <button type="submit" className="px-4 py-2 bg-ink text-canvas rounded hover:bg-ink/90 transition-colors">
          {!hasAdmin ? 'Sign Up' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}
