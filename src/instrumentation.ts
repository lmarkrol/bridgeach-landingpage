export async function register() {
    if (process.env.NEXT_RUNTIME === 'nodejs') {
        const os = await import('os');

        // Small delay to ensure it prints after Next.js clears console
        setTimeout(() => {
            const interfaces = os.networkInterfaces();
            let port = process.env.PORT || 3000;

            // Check for port in command line arguments
            const args = process.argv;
            const portIndex = args.indexOf('-p') !== -1 ? args.indexOf('-p') : args.indexOf('--port');
            if (portIndex !== -1 && args[portIndex + 1]) {
                port = parseInt(args[portIndex + 1], 10);
            }

            const addresses: string[] = [];

            Object.keys(interfaces).forEach((ifname) => {
                const ifaceList = interfaces[ifname];
                if (ifaceList) {
                    ifaceList.forEach((iface) => {
                        if (iface.family === 'IPv4' && !iface.internal) {
                            addresses.push(`http://${iface.address}:${port}`);
                        }
                    });
                }
            });

            if (addresses.length > 0) {
                console.log('\n \x1b[32mIPv4 Addresses:\x1b[0m'); // Green color header
                addresses.forEach(addr => console.log(`  - ${addr}`));
                console.log('');
            }
        }, 2000); // 2 seconds delay to appear after Next.js banner
    }
}
