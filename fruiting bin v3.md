#TODO need to fill out the material requirements for the fruiting chamber to be built. A lot of it is still up in the air and needs to be figured out.

Current challenges to completion: 
1. Need a power supply to get the circuit going
	1. 24V 1A pond fogger 
	2. 12V low amp fans (==perhaps a voltage divider==, ***but then I need to balance the resistance or up the voltage with an additional voltage drop before the 24V load***)
2. Need to design a circuit incorporating the Arduino board into the activation of fans for different cycles (different circuits): 
	1. Full circulation (all three fans on) -> tied to timing
	2. Humidification (pond fogger and one fan on) -> contingent on air sensor values
3. Need to get the circuit components 
	1. input: 5V low amp | output: 24V 1A into 12V 0.25 amps -> where are the other fucking 0.75 amps going :0 ==Transistor (use current ones); check for max amperage==
	2. OPAmp?? -> boost voltage past 12V or the voltage that is available 
	3. Powering LCD screen and sensor (want to go to 5V and stay at 5V)
	4. Maybe voltage smoothing (capacitors)
	5. 