import React from "react";

const TeamLeaderForm = ({
  leaderDetails,
  setLeaderDetails,
  enabled = false,
}) => {
  return (
    <div>
      <h3 className="form-que">Team Leader</h3>
      <div className="flex flex-col space-y-3">
        <input
          type="text"
          placeholder="Team Leader Name"
          value={leaderDetails.name || ""}
          onChange={(e) =>
            setLeaderDetails((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
          className="form-input"
          required={true}
          disabled={!enabled}
        />
        <input
          type="number"
          placeholder="Graduation Year"
          value={leaderDetails.year || ""}
          onChange={(e) =>
            setLeaderDetails((prev) => ({ ...prev, year: e.target.value }))
          }
          className="form-input"
          max="2028"
          min={new Date().getFullYear()}
          required={true}
          disabled={!enabled}
        />
        <input
          type="tel"
          placeholder="Whatsapp No."
          value={leaderDetails.phone || ""}
          onChange={(e) =>
            setLeaderDetails((prev) => ({ ...prev, phone: e.target.value }))
          }
          pattern="[0-9]{10}"
          className="form-input"
          required={true}
          disabled={!enabled}
        />
        <input
          type="email"
          placeholder="Email"
          value={leaderDetails.email || ""}
          onChange={(e) =>
            setLeaderDetails((prev) => ({ ...prev, email: e.target.value }))
          }
          className="form-input"
          required={true}
          disabled={!enabled}
        />
      </div>
    </div>
  );
};

export default TeamLeaderForm;
