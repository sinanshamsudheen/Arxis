# 🚀 Arxis Backend - Quick Start

## Prerequisites
- Python 3.11+
- OpenAI API key

## 5-Minute Setup

### 1. Environment Setup
```bash
# Navigate to backend
cd backend

# Create and activate conda environment
conda create -n lokam python=3.11
conda activate lokam
```

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

### 3. Configure API Key
```bash
# Copy environment template
cp .env.example .env

# Edit .env and add your OpenAI API key
# OPENAI_API_KEY=sk-your-key-here
```

### 4. Start the System
```bash
# Option A: Start everything at once
chmod +x start_all.sh
./start_all.sh

# Option B: Start components separately
# Terminal 1:
python api.py

# Terminal 2:
python log_generator.py
```

## ✅ Verify It's Working

### Check API Health
```bash
curl http://localhost:8000/health
```

### View Metrics
```bash
curl http://localhost:8000/metrics
```

### Watch for Alerts
```bash
# Wait 1-2 minutes for detections to trigger
curl http://localhost:8000/alerts | python -m json.tool
```

## 🎯 What to Expect

1. **First 30 seconds**: Logs start flowing
2. **1-2 minutes**: First detection signal (brute force or suspicious login)
3. **~30 seconds later**: Agents finish processing, alert created
4. **Ongoing**: New alerts every few minutes

## 🐛 Common Issues

### "ModuleNotFoundError: No module named 'crewai'"
```bash
# Ensure you're in the right environment
conda activate lokam
pip install -r requirements.txt
```

### "OpenAI API key not found"
```bash
# Check .env file exists and has key
cat .env
# Should show: OPENAI_API_KEY=sk-...
```

### "Connection refused on localhost:8000"
```bash
# Ensure API is running
python api.py
# Should see startup message
```

## 📖 Next Steps

- Read `README.md` for detailed documentation
- Read `IMPLEMENTATION.md` for architecture details
- Check `PRD.md` in parent directory for project overview

## 🎬 Demo Mode

To trigger specific alerts for demo:
1. Watch log generator output
2. Wait for patterns:
   - Multiple failed logins from same user (brute force)
   - Login from Russia/North Korea (suspicious)
   - Privilege escalation + data download (insider threat)

## 🛟 Get Help

Check the logs:
```bash
# View recent logs
curl http://localhost:8000/debug/logs

# View detection signals
curl http://localhost:8000/debug/signals
```

---

**You're ready to run Arxis SOC!** 🛡️
