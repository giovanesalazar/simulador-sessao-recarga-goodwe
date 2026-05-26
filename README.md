# Simulador de Sessão de Recarga - GoodWe
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

### 4. Aplicação das Regras de Tarifação

O sistema utiliza uma tarifa base de energia, que pode sofrer alterações dependendo das condições:

* Horário de pico: acréscimo de 30% na tarifa
* Usuário premium: desconto de 20% no valor final

---

### 5. Cálculo do Valor Total

Após definir a tarifa final, o valor total da sessão é calculado:

Valor Total = Energia Consumida × Tarifa Final

---

### 6. Exibição dos Resultados

O sistema apresenta ao usuário um resumo da sessão contendo:

* Tempo total de recarga
* Energia consumida (kWh)
* Tarifa aplicada
* Desconto
* Valor total a pagar

---
