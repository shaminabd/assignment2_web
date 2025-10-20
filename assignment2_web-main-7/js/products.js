document.addEventListener("DOMContentLoaded", () => {
    const plansGrid = document.getElementById("plansGrid");
    const planFilter = document.getElementById("planFilter");
    const applyPlanFilter = document.getElementById("applyPlanFilter");
    if (!(plansGrid && planFilter && applyPlanFilter)) return;

    function applyFilter() {
        const value = planFilter.value;
        const cards = Array.from(plansGrid.querySelectorAll('[data-plan]'));
        cards.forEach(card => {
            const plan = card.getAttribute('data-plan');
            let show = true;
            switch (value) {
                case 'starter':
                case 'pro':
                case 'team':
                case 'student':
                case 'mentor':
                case 'enterprise':
                    show = plan === value;
                    break;
                case 'all':
                default:
                    show = true;
            }
            card.style.display = show ? '' : 'none';
        });
    }

    applyPlanFilter.addEventListener('click', applyFilter);
});


