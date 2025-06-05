// components/SignupForm.tsx
interface Props {
  onSwitchToLogin: () => void;
}

export default function SignupForm({ onSwitchToLogin }: Props) {
  return (
    <form className="w-full px-2">
      <div className="mt-5">
        <input
          type="text"
          placeholder="Email Address"
          required
          className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-[#1a75ff] focus:outline-none"
        />
      </div>
      <div className="mt-5">
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-[#1a75ff] focus:outline-none"
        />
      </div>
      <div className="mt-5">
        <input
          type="password"
          placeholder="Confirm password"
          required
          className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-[#1a75ff] focus:outline-none"
        />
      </div>
      <div className="mt-6 relative group">
        <input
          type="submit"
          value="Signup"
          className="w-full h-12 bg-gradient-to-r from-[#003366] via-[#0059b3] to-[#0073e6] border-none text-white font-medium cursor-pointer rounded-xl"
        />
      </div>
      <div className="text-center mt-6 text-sm">
        Already have an account?{" "}
        <button
          className="text-[#1a75ff] hover:underline"
          onClick={(e) => {
            e.preventDefault();
            onSwitchToLogin();
          }}
        >
          Login here
        </button>
      </div>
    </form>
  );
}
