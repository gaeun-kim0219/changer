function convertUnit() {
  const input = parseFloat(document.getElementById("unitInput").value);
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;

  if (isNaN(input)) {
    Swal.fire('입력 오류', '숫자를 입력하세요!', 'error');
    return;
  }

  const meterFactors = {
    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
  };

  const meters = input * meterFactors[from];
  const result = meters / meterFactors[to];

  Swal.fire({
    title: '📏 변환 결과',
    html: `<strong>${input} ${from}</strong> = <strong>${result} ${to}</strong>`,
    icon: 'info',
    confirmButtonColor: '#6366f1'
  });
}

function calculate() {
  const expr = document.getElementById("expression").value;

  try {
    const result = Function(`"use strict"; return (${expr})`)();
    Swal.fire({
      title: '🧮 계산 결과',
      html: `<strong>${expr} = ${result}</strong>`,
      icon: 'success',
      confirmButtonColor: '#4f46e5'
    });
  } catch {
    Swal.fire('입력 오류', '올바른 수식을 입력하세요!', 'error');
  }
}
