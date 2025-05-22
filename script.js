// Интерактивный терминал
document.addEventListener('DOMContentLoaded', function() {
    const terminalInput = document.getElementById('command-input');
    const terminalOutput = document.getElementById('terminal-output');
    
    if (terminalInput && terminalOutput) {
        terminalInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const command = terminalInput.value.trim();
                terminalInput.value = '';
                
                // Добавляем введенную команду в вывод
                const commandLine = document.createElement('p');
                commandLine.innerHTML = `<span class="prompt">$</span> ${command}`;
                terminalOutput.appendChild(commandLine);
                
                // Обработка команд
                let output = '';
                switch(command.split(' ')[0]) {
                    case 'ls':
                        output = 'file1.txt  file2.txt  Documents  Downloads';
                        break;
                    case 'help':
                        output = 'Доступные команды: ls, cd, pwd, help, clear';
                        break;
                    case 'clear':
                        terminalOutput.innerHTML = '';
                        return;
                    default:
                        output = `Команда "${command}" не найдена. Введите "help" для списка команд.`;
                }
                
                // Добавляем вывод команды
                const outputLine = document.createElement('p');
                outputLine.textContent = output;
                terminalOutput.appendChild(outputLine);
                
                // Прокрутка вниз
                terminalOutput.scrollTop = terminalOutput.scrollHeight;
            }
        });
    }
    
    // Мобильное меню
    const mobileMenuButton = document.createElement('div');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
    
    const mainNav = document.querySelector('.main-nav');
    if (mainNav) {
        document.querySelector('.header .container').prepend(mobileMenuButton);
        
        mobileMenuButton.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }
});