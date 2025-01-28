---
title: RaspberryPi 
aliases: 
date: 2025-01-28
tags: 
description:
---


### Fan control
Script to control 
```python title="/usr/local/bin/fan_control.py"
#!/usr/bin/env python3
import os
import time

# GPIO setup
FAN_PIN = 18

def setup_gpio():
    # Export GPIO if not already exported
    if not os.path.exists(f'/sys/class/gpio/gpio{FAN_PIN}'):
        with open('/sys/class/gpio/export', 'w') as f:
            f.write(str(FAN_PIN))
    # Set direction
    with open(f'/sys/class/gpio/gpio{FAN_PIN}/direction', 'w') as f:
        f.write('out')

def get_cpu_temp():
    with open('/sys/class/thermal/thermal_zone0/temp', 'r') as f:
        return float(f.read()) / 1000.0 # temp is in milli Celsius

def set_fan_level(level):
    with open(f'/sys/class/gpio/gpio{FAN_PIN}/value', 'w') as f:
        f.write(str(level))

def main():
    setup_gpio()
    
    while True:
        temp = get_cpu_temp()
        
        if temp > 70:
            set_fan_level(4)
        elif temp > 50:
            set_fan_level(3)
        elif temp > 40:
            set_fan_level(2)
        else:
            set_fan_level(1)  
            
        time.sleep(5)

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        set_fan_level(0)
```

```title="/etc/systemd/system/fan_control.service"
[Unit]
Description=RPi Fan Control
After=multi-user.target

[Service]
Type=simple
ExecStart=/usr/local/bin/fan_control.py
Restart=always
User=root

[Install]
WantedBy=multi-user.target
```

```shell
sudo systemctl enable fan_control
sudo systemctl start fan_control
```

- Always keep the fan running at 25% (Level 1)
- Increase to 50% when temperature is 40-50°C (Level 2)
- Increase to 75% when temperature is 50-70°C (Level 3)
- Run at 100% when temperature is above 70°C (Level 4)

To stop:
```shell
sudo systemctl stop fan_control
echo "0" > /sys/class/gpio/gpio18/value
```