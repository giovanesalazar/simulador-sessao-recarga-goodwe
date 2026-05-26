# 🔋 Simulador de Sessão de Recarga - GoodWe
## 📌 Descrição:

Este projeto tem como objetivo simular uma sessão de recarga de veículos elétricos, permitindo ao usuário inserir dados como tempo de recarga, potência do carregador, tipo de usuário e horário.
Com base nessas informações, o sistema calcula a energia consumida e o valor total da sessão. – Desafio GoodWe & FIAP 2026.

---

## ⚙️ Lógica do Sistema

A lógica do programa foi desenvolvida em etapas :

---

### 1. Entrada de Dados

O sistema coleta as seguintes informações:

* Tipo de usuário (Comum ou Premium)
* Tempo de recarga (em minutos)
* Potência do carregador (em kW)
* Horário da recarga (Normal ou Pico)

---

### 2. Validação de Dados

Antes de realizar os cálculos, o sistema valida os dados inseridos:

* O tempo de recarga deve ser maior que zero
* A potência do carregador deve ser maior que zero

Caso algum valor seja inválido, o sistema solicita uma nova entrada.

---

### 3. Cálculo da Energia Consumida

A energia consumida é calculada com base na seguinte lógica:

* A potência do carregador (kW) é dividida por 60 para obter o consumo por minuto
* Esse valor é multiplicado pelo tempo total da recarga

**Fórmula:**

Energia (kWh) = (Potência / 60) × Tempo

---

### 4. Sistema de Tarifação por Potência

O sistema aplica diferentes valores por kWh para representar de forma mais realista os custos operacionais de cada tipo de carregamento.

* Carregadores com potência de até 7 kW utilizam tarifa de R$ 2,00/kWh, sendo classificados como carregamento lento ou residencial.
* Carregadores com potência acima de 7 kW até 22 kW utilizam tarifa de R$ 2,50/kWh, representando carregadores semirrápidos.
* Carregadores com potência acima de 22 kW utilizam tarifa de R$ 3,00/kWh, classificados como carregamento rápido.

Portanto, quanto mais rápido o carregador maior fica o valor total a ser pago.

---

### 5. Aplicação das Regras de Tarifação

O sistema utiliza uma tarifa base de energia, que pode sofrer alterações dependendo das condições:

* Horário de pico: acréscimo de 30% na tarifa
* Usuário premium: desconto de 20% no valor final

---

### 6. Cálculo do Valor Total

Após definir a tarifa final, o valor total da sessão é calculado:

Valor Total = Energia Consumida × Tarifa Final

---

### 7. Exibição dos Resultados

O sistema apresenta ao usuário um resumo da sessão contendo:

* Tempo total de recarga
* Energia consumida (kWh)
* Tarifa aplicada
* Desconto
* Valor total a pagar

---

## ⚙️ Distribuição das Abas

A interface foi divida em três abas :

---

### 🔋 Aba Sessão de Recarga

A aba de sessão de recarga é responsável pela simulação principal do sistema. Nela, o usuário informa dados como tipo de usuário, tempo de recarga, potência do carregador e horário de utilização. Com base nessas informações, o sistema calcula automaticamente a energia consumida, tarifas adicionais, descontos e o valor total da sessão.

---

### 📋 Aba de Tarifação

A aba de tarifação apresenta as regras utilizadas no cálculo da recarga, incluindo descontos para usuários premium e acréscimos aplicados em horários de pico. Além disso, a seção explica como o valor final é calculado com base na potência do carregador, energia consumida e tarifas aplicadas durante a sessão.

---

### 💳 Aba Pagamentos

Na aba de pagamentos, o usuário consegue visualizar de forma clara todas as informações financeiras da sessão de recarga. O sistema exibe o valor total calculado com base na energia consumida, na potência do carregador utilizado e nas regras de tarifação aplicadas.

O sistema oferece diferentes formas de pagamento, como PIX, cartão e boleto bancário.

---
